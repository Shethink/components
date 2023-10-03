import React, { memo, useState } from "react";
import Container from "../container";
import {
  AdditionalDataContainer,
  ListWrapper,
  SequenceBasicDetails,
  SequenceGeneralData,
  SequenceMetrics,
  SequencePhaseContainer,
  SequqncePhaseTitle,
  sequencePhaseContainerClasses,
} from "./styles";
import Row from "../row";
import Checkbox from "../checkbox";
import { Typography, Tooltip } from "@mui/material";
import { colours } from "../theme-provider";
import classNames from "classnames";

const active = "Active";
const paused = "Paused";
const unsent = "Not sent";
const bounced = "Bounced";
const spam_blocked = "Spam";
const finished = "Finished";
const scheduled = "Scheduled";
const delivered = "Delivered";
const replied = "Reply";

export type SequenceListItem = {
  id: string;
  name: string;
  createdBy: string;
  numberOfSteps?: number;
  activeContacts?: number;
  pausedContacts?: number;
  unsentContacts?: number;
  bouncedContacts?: number;
  spamBlockedContacts?: number;
  finishedContacts?: number;
  scheduledEmails?: number;
  deliveredEmails?: number;
  repliedEmails?: number;
};

export interface SequenceListProps {
  items: SequenceListItem[];
  onActivateSequence?: () => void;
  onStarSequence?: () => void;
  onArchive?: () => void;
  onEdit?: () => void;
}

export type SequencePhase = {
  key: number | undefined;
  title: string;
  tooltipLabel: string;
};

const SequencePhase = ({
  phaseData,
  hasMargins,
}: {
  phaseData: SequencePhase;
  hasMargins?: boolean;
}) => {
  const { key, title, tooltipLabel } = phaseData;
  return (
    <SequencePhaseContainer
      className={classNames(hasMargins && sequencePhaseContainerClasses.margin)}
    >
      <span>{key ?? "-"}</span>
      <Tooltip title={tooltipLabel} placement="top" arrow>
        <SequqncePhaseTitle>{title}</SequqncePhaseTitle>
      </Tooltip>
    </SequencePhaseContainer>
  );
};

const SequenceItem = memo(({ item }: { item: SequenceListItem }) => {
  const {
    name,
    createdBy,
    numberOfSteps,
    activeContacts,
    pausedContacts,
    unsentContacts,
    bouncedContacts,
    spamBlockedContacts,
    finishedContacts,
    scheduledEmails,
    deliveredEmails,
    repliedEmails,
  } = item;

  const initialPhaseData: SequencePhase[] = [
    { key: activeContacts, title: active, tooltipLabel: "Active Contacts" },
    { key: pausedContacts, title: paused, tooltipLabel: "" },
    { key: unsentContacts, title: unsent, tooltipLabel: "" },
    { key: bouncedContacts, title: bounced, tooltipLabel: "" },
    { key: spamBlockedContacts, title: spam_blocked, tooltipLabel: "" },
    { key: finishedContacts, title: finished, tooltipLabel: "" },
  ];

  const additionalPhaseData: SequencePhase[] = [
    { key: scheduledEmails, title: scheduled, tooltipLabel: "" },
    { key: deliveredEmails, title: delivered, tooltipLabel: "" },
    { key: repliedEmails, title: replied, tooltipLabel: "" },
  ];

  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <Row>
      <section style={{ width: "30%" }}>
        <Row>
          <Checkbox
            isChecked={isSelected}
            onChange={(checked) => setIsSelected(checked)}
          />
          <SequenceBasicDetails>
            <Typography variant="body1" fontWeight={"500"}>
              {name}
            </Typography>
            <Row>
              <SequenceGeneralData>{createdBy}</SequenceGeneralData>
              <SequenceGeneralData
                marginLeft={".5rem"}
                sx={{ color: colours.black400 }}
              >{`${numberOfSteps ?? 0} steps`}</SequenceGeneralData>
            </Row>
          </SequenceBasicDetails>
        </Row>
      </section>
      <SequenceMetrics>
        <Row>
          {[...initialPhaseData].map((phase) => (
            <SequencePhase phaseData={phase} key={phase.title} />
          ))}
        </Row>
      </SequenceMetrics>
      <AdditionalDataContainer>
        <Row>
          {[...additionalPhaseData].map((phase) => (
            <SequencePhase phaseData={phase} key={phase.title} hasMargins />
          ))}
        </Row>
      </AdditionalDataContainer>
    </Row>
  );
});

const SequenceList = ({ items }: SequenceListProps) => {
  return (
    <Container fullWidth>
      <ListWrapper>
        {items.map((item) => {
          return <SequenceItem item={item} key={item.id} />;
        })}
      </ListWrapper>
    </Container>
  );
};

export default SequenceList;

export { SequenceItem };
