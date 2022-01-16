import { useMemo, useCallback } from 'react';

import { useIconReact } from 'packages/icon-react';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Token } from 'types/balanced-sdk-core';

import { addSerializedToken, SerializedToken, removeSerializedToken } from './actions';

function serializeToken(token: Token): SerializedToken {
  return {
    chainId: token.chainId,
    address: token.address,
    decimals: token.decimals,
    symbol: token.symbol,
    name: token.name,
  };
}

function deserializeToken(serializedToken: SerializedToken): Token {
  return new Token(
    serializedToken.chainId,
    serializedToken.address,
    serializedToken.decimals,
    serializedToken.symbol,
    serializedToken.name,
  );
}

export function useUserAddedTokens(): Token[] {
  const { networkId: chainId } = useIconReact();
  const serializedTokensMap = useAppSelector(({ user: { tokens } }) => tokens);

  return useMemo(() => {
    if (!chainId) return [];
    return Object.values(serializedTokensMap?.[chainId] ?? {}).map(deserializeToken);
  }, [serializedTokensMap, chainId]);
}

export function useAddUserToken(): (token: Token) => void {
  const dispatch = useAppDispatch();
  return useCallback(
    (token: Token) => {
      dispatch(addSerializedToken({ serializedToken: serializeToken(token) }));
    },
    [dispatch],
  );
}

export function useRemoveUserAddedToken(): (chainId: number, address: string) => void {
  const dispatch = useAppDispatch();
  return useCallback(
    (chainId: number, address: string) => {
      dispatch(removeSerializedToken({ chainId, address }));
    },
    [dispatch],
  );
}

export function useIsUserAddedToken(token: Token): boolean {
  const userAddedTokens = useUserAddedTokens();

  return !!userAddedTokens.find(t => t.address === token.address);
}