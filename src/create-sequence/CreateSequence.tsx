import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Modal, { ModalProps } from "../modal";
import { Close } from "../icon";
import Row from "../row";
import Button from "../button";
import {
  Card,
  CreateSequenceCardContainer,
  CreateSequenceForm,
  CreateSequenceFormButtonsContainer,
  CreateSequenceFormLabel,
  SchedulesContainer,
  cardClasses,
} from "./styles";
import classNames from "classnames";
import { colours } from "../theme-provider";
import TextField from "../text-field/TextField";
import Select, { SelectOption } from "../select";

export type SequenceOptions = {
  url: string;
  title: string;
  subtitle: string;
};

export type CreateSequenceProps = Omit<ModalProps, "onClose"> & {
  createOptions: SequenceOptions[];
  sequenceName: string;
  handleSequenceNameChange: (name: string) => void;
  onClose: () => void;
  title?: string;
  subheader?: string;
  step2Title?: string;
  permissionsOptions: SelectOption[];
  schedules?: SelectOption[];
  handleCreate: () => void;
};

const CreateSequence: React.FC<CreateSequenceProps> = ({
  createOptions,
  open,
  onClose,
  sequenceName,
  handleSequenceNameChange,
  title = "Create a sequence",
  subheader = "Sequences are a series of automated or manual touchpoints and activities, designed to drive deeper engagement with your contacts.",
  step2Title = "Customize this sequence’s name, permission settings, sending schedule, and more.",
  permissionsOptions,
  schedules,
  handleCreate,
}) => {
  const headerTitle = "New Sequence";
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);

  const handleClick = (newStep: 1 | 2) => setCurrentStep(newStep);

  return (
    <Modal open={open} onClose={onClose} centered>
      {currentStep === 1 ? (
        <>
          <Row style={{ justifyContent: "flex-end" }}>
            <Button variant="text" onClick={onClose}>
              <Close />
            </Button>
          </Row>
          <Box>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="subtitle2" sx={{ marginTop: 2 }}>
              {subheader}
            </Typography>
            <Row
              style={{
                justifyContent: "space-between",
                marginTop: 15,
                flexWrap: "wrap",
              }}
            >
              {createOptions.map((option) => (
                <Card
                  classes={{ root: classNames(cardClasses.root) }}
                  onClick={() => handleClick(2)}
                  key={option.url}
                >
                  <CreateSequenceCardContainer>
                    <img
                      src={option.url}
                      alt={`create-image-${option.title} img`}
                    />
                    <Typography variant="h3">{option.title}</Typography>
                    <Typography variant="body1">{option.subtitle}</Typography>
                  </CreateSequenceCardContainer>
                </Card>
              ))}
            </Row>
          </Box>
        </>
      ) : (
        <>
          <Row style={{ justifyContent: "space-between" }}>
            <Typography variant="h6" fontWeight={"500"}>
              {headerTitle}
            </Typography>
            <Button variant="text">
              <Close />
            </Button>
          </Row>
          <Box>
            <Box
              sx={{
                background: colours.white100,
                marginTop: "1rem",
                padding: "1rem",
              }}
            >
              <Typography variant="subtitle2" fontWeight={"400"}>
                {step2Title}
              </Typography>

              <CreateSequenceForm>
                <div>
                  <Row style={{ justifyContent: "space-between" }}>
                    <div style={{ width: "45%" }}>
                      <CreateSequenceFormLabel variant="subtitle1">
                        Sequence for
                      </CreateSequenceFormLabel>
                      <TextField
                        variant="outlined"
                        value={sequenceName}
                        onChange={handleSequenceNameChange}
                      />
                    </div>
                    <div style={{ width: "50%" }}>
                      <CreateSequenceFormLabel>
                        Permissions
                      </CreateSequenceFormLabel>
                      <Select
                        options={permissionsOptions}
                        isInsideModal
                        styles={{
                          container: () => ({ marginTop: 5 }),
                        }}
                      />
                    </div>
                  </Row>

                  <SchedulesContainer>
                    <Row>
                      <div style={{ width: "45%" }}>
                        <CreateSequenceFormLabel>
                          Schedule
                        </CreateSequenceFormLabel>
                        <Select
                          options={schedules}
                          isMultiple
                          isInsideModal
                          isAnimated
                          styles={{
                            container: () => ({ marginTop: 5 }),
                          }}
                          onChange={(e) => console.log(e)}
                        />
                      </div>
                    </Row>
                  </SchedulesContainer>

                  <CreateSequenceFormButtonsContainer>
                    <Row style={{ justifyContent: "flex-end" }}>
                      <Button
                        variant="outlined"
                        style={{ marginRight: "10px" }}
                        onClick={() => handleClick(1)}
                      >
                        {"Back"}
                      </Button>
                      <Button onClick={handleCreate}>{"Create"}</Button>
                    </Row>
                  </CreateSequenceFormButtonsContainer>
                </div>
              </CreateSequenceForm>
            </Box>
          </Box>
        </>
      )}
    </Modal>
  );
};

export default CreateSequence;
