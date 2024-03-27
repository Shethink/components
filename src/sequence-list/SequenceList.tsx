import React, { memo, useState } from "react";
import Container from "../container";
import {
  AdditionalDataContainer,
  ListWrapper,
  SequenceBasicDetails,
  SequenceGeneralData,
  SequenceItemWrapper,
  SequenceMetrics,
  SequencePhaseContainer,
  SequqncePhaseTitle,
  sequencePhaseContainerClasses,
} from "./styles";
import Row from "../row";
// import Checkbox from "../checkbox-group";
import { Typography, Tooltip } from "@mui/material";
import { colours } from "../theme-provider";
import classNames from "classnames";
import Switch from "../switch";
import { Star } from "../icon";

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
  id: number;
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
  onClickSequence: (id: number) => void;
  onActivateSequence?: () => void;
  onStarSequence?: () => void;
  onArchive?: () => void;
  onEdit?: () => void;
}

export type SequencePhaseProps = {
  key: number | undefined;
  title: string;
  tooltipLabel: string;
};

const SequencePhase = memo(
  ({
    phaseData,
    hasMargins,
  }: {
    phaseData: SequencePhaseProps;
    hasMargins?: boolean;
  }) => {
    const { key, title, tooltipLabel } = phaseData;
    return (
      <SequencePhaseContainer
        className={classNames(
          hasMargins && sequencePhaseContainerClasses.margin
        )}
      >
        <span>{key ?? "-"}</span>
        <Tooltip title={tooltipLabel} placement="top" arrow>
          <SequqncePhaseTitle>{title}</SequqncePhaseTitle>
        </Tooltip>
      </SequencePhaseContainer>
    );
  }
);

const SequenceItem = memo(
  ({
    item,
    onClickSequence,
  }: {
    item: SequenceListItem;
    onClickSequence: (id: number) => void;
  }) => {
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
      id,
    } = item;

    const initialPhaseData: SequencePhaseProps[] = [
      { key: activeContacts, title: active, tooltipLabel: "Active Contacts" },
      { key: pausedContacts, title: paused, tooltipLabel: "" },
      { key: unsentContacts, title: unsent, tooltipLabel: "" },
      { key: bouncedContacts, title: bounced, tooltipLabel: "" },
      { key: spamBlockedContacts, title: spam_blocked, tooltipLabel: "" },
      { key: finishedContacts, title: finished, tooltipLabel: "" },
    ];

    const additionalPhaseData: SequencePhaseProps[] = [
      { key: scheduledEmails, title: scheduled, tooltipLabel: "" },
      { key: deliveredEmails, title: delivered, tooltipLabel: "" },
      { key: repliedEmails, title: replied, tooltipLabel: "" },
    ];

    const [isSelected, setIsSelected] = useState<boolean>(false);

    return (
      <SequenceItemWrapper onClick={() => onClickSequence(id)}>
        <section style={{ width: "25%" }}>
          <Row>
            {/* <Checkbox
              isChecked={isSelected}
              onChange={(checked) => setIsSelected(checked)}
            /> */}
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
        <section style={{ padding: "0 .7rem" }}>
          <Row>
            <Switch isActive onToggle={() => {}} size="small" />
            <Tooltip title="Add to starred sequences" placement="top">
              <Star />
            </Tooltip>
          </Row>
        </section>
      </SequenceItemWrapper>
    );
  }
);

const SequenceList = ({ items, onClickSequence }: SequenceListProps) => {
  return (
    <Container fullWidth>
      <ListWrapper>
        {items.map((item) => {
          return (
            <SequenceItem
              item={item}
              onClickSequence={onClickSequence}
              key={item.id.toString()}
            />
          );
        })}
      </ListWrapper>
    </Container>
  );
};

export default SequenceList;

export { SequenceItem, SequencePhase };
