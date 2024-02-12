import React from 'react';

import { Trans, t } from '@lingui/macro';
import { useIconReact } from 'packages/icon-react';
import { Box, Flex } from 'rebass';

import { Button, TextButton } from 'app/components/Button';
import { UnderlineText } from 'app/components/DropdownText';
import Modal from 'app/components/Modal';
import ModalContent from 'app/components/ModalContent';
import Spinner from 'app/components/Spinner';
import { Typography } from 'app/theme';
import bnJs from 'bnJs';
import { useChangeShouldLedgerSign, useShouldLedgerSign } from 'store/application/hooks';
import { useLockedAmount, useUnclaimedRewards } from 'store/savings/hooks';
import { useTransactionAdder } from 'store/transactions/hooks';
import { useHasEnoughICX } from 'store/wallet/hooks';
import { showMessageOnBeforeUnload } from 'utils/messages';

import RewardsGrid from './RewardsGrid';

const SavingsRewards = () => {
  const { data: rewards } = useUnclaimedRewards();
  const { account } = useIconReact();
  const shouldLedgerSign = useShouldLedgerSign();
  const changeShouldLedgerSign = useChangeShouldLedgerSign();
  const addTransaction = useTransactionAdder();
  const hasEnoughICX = useHasEnoughICX();
  const [isOpen, setOpen] = React.useState(false);
  const lockedAmount = useLockedAmount();

  const toggleOpen = React.useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  const handleClaim = async () => {
    if (!account) return;

    window.addEventListener('beforeunload', showMessageOnBeforeUnload);
    if (bnJs.contractSettings.ledgerSettings.actived) {
      changeShouldLedgerSign(true);
    }

    try {
      const { result: hash } = await bnJs.inject({ account }).Savings.claimRewards();
      addTransaction(
        { hash },
        {
          pending: t`Claiming savings rewards...`,
          summary: t`Claimed savings rewards.`,
        },
      );
      toggleOpen();
    } catch (e) {
      console.error('claiming savings rewards error: ', e);
    } finally {
      changeShouldLedgerSign(false);
      window.removeEventListener('beforeunload', showMessageOnBeforeUnload);
    }
  };

  return (
    <>
      <Box width="100%">
        <Flex justifyContent="space-between" mb={3}>
          <Flex>
            <Typography variant="h4" fontWeight="bold" fontSize={16} color="text">
              bnUSD savings
            </Typography>
            <Typography fontSize={14} opacity={0.75} padding="3px 0 0 8px">
              3.5%
            </Typography>
          </Flex>
          {lockedAmount && lockedAmount.greaterThan(0) && (
            <UnderlineText>
              <Typography color="primaryBright" onClick={toggleOpen}>
                <Trans>Claim</Trans>
              </Typography>
            </UnderlineText>
          )}
        </Flex>
        {lockedAmount && lockedAmount.greaterThan(0) ? (
          <RewardsGrid rewards={rewards} />
        ) : (
          <Typography fontSize={14} opacity={0.75} maxWidth={'220px'} mb={5}>
            Deposit bnUSD to earn interest and other incentives
          </Typography>
        )}
      </Box>

      <Modal isOpen={isOpen} onDismiss={toggleOpen}>
        <ModalContent>
          <Typography textAlign="center" mb={1}>
            <Trans>Claim bnUSD savings?</Trans>
          </Typography>

          <Flex flexDirection="column" alignItems="center" mt={2}>
            {rewards?.map((reward, index) => (
              <Typography key={index} variant="p">
                {`${reward.toFixed(2, { groupSeparator: ',' })}`}{' '}
                <Typography as="span" color="text1">
                  {reward.currency.symbol}
                </Typography>
              </Typography>
            ))}
          </Flex>

          <Flex justifyContent="center" mt={4} pt={4} className="border-top">
            {shouldLedgerSign && <Spinner></Spinner>}
            {!shouldLedgerSign && (
              <>
                <TextButton onClick={toggleOpen} fontSize={14}>
                  <Trans>Not now</Trans>
                </TextButton>
                <Button onClick={handleClaim} fontSize={14} disabled={!hasEnoughICX}>
                  <Trans>Claim</Trans>
                </Button>
              </>
            )}
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};
export default SavingsRewards;
