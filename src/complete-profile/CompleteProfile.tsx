import {
  ButtonProps as MuiButtonProps,
  IconButtonProps as MuiIconButtonProps,
} from "@mui/material";
import classnames from "classnames";
import React, { ReactNode, useState } from "react";
import { StyledLabel, StyledBox, completeProfileClasses, StyledCheckCircle, StyledCheckCross } from "./styles";
import Container from "../container";
import Row from "../row";
import TextField from "../text-field";
import classNames from "classnames";
import { CancelIcon, CheckCircleIcon } from "../icon";
import CustomSelect from "../custom-select";
import FilePicker from "../file-picker";
import Button from "../button";

interface Item {
  id: number;
  name: string;
}
type ProfileData = {
  name: string
  agencyName: string
  website: string
  linkedinURL: string
  location: string
  email: string
  phone: string
  selectedIndustries: Item[]
  portfolio: File[] | []
  ip: string
}
export type CompleteProfileProps = {
  children: ReactNode
  pageTitle: string
  profileType?: 'agency' | 'marketer'
  submitButtonLabel?: string
  onSubmit: (data: ProfileData) => void
};

const CompleteProfile = ({
  children,
  pageTitle,
  profileType,
  submitButtonLabel,
  onSubmit

}: CompleteProfileProps) => {
  const [name, setName] = useState('')
  const [agencyName, setAgencyName] = useState('')
  const [website, setWebsite] = useState('')
  const [linkedinURL, setLinkedinURL] = useState('')
  const [location, setLocation] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPhoneValid, setIsPhoneValid] = useState(false)
  const [selectedIndustries, setSelectedIndustries] = useState<Item[]>([]);
  const [selectedServices, setSelectedServices] = useState<Item[]>([])
  const [pickedFiles, setPickedFiles] = useState<File[] | []>([])
  const [ip, setIp] = useState('')
  interface Item {
    id: number;
    name: string;
  }
  const industriesOption: Item[] = [
    {
      id: 1,
      name: "Home Services",
    },
    {
      id: 2,
      name: "Government",
    },
    {
      id: 3,
      name: "Oil & Gas",
    },
    {
      id: 4,
      name: "Food and Beverages",
    },
    {
      id: 5,
      name: "Manufacturing",
    },
    {
      id: 6,
      name: "Agriculture",
    },
    {
      id: 7,
      name: "Health & Wellness",
    },
    {
      id: 8,
      name: "Sports & Fitness",
    },
  ];
  const servicesOptions: Item[] = [
    {
      id: 1,
      name: "Advertising",
    },
    {
      id: 2,
      name: "Digital Agencies",
    },
    {
      id: 3,
      name: "PPC",
    },
    {
      id: 4,
      name: "Content marketing",
    },
    {
      id: 5,
      name: "Advertising",
    },
    {
      id: 6,
      name: "Digital Agencies",
    },
    {
      id: 7,
      name: "Digital Agencies",
    },
    {
      id: 8,
      name: "Digital Agencies",
    },
  ];

  const validateEmail = (email: string) => {
    let isValid = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    setIsEmailValid(!!isValid)
  };
  function validateNumber(num: string) {
    let isValid = num.match(/^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/);
    setIsPhoneValid(!!isValid)


  }

  return <Container>
    <Row style={{ justifyContent: 'flex-start' }}>
      <StyledLabel className={classNames(completeProfileClasses.medium)}>{pageTitle}</StyledLabel>
    </Row>
    <Row style={{ justifyContent: 'space-between', gap: '25px', flexWrap: 'wrap', marginTop: '1rem' }}>
      <StyledBox className={classNames(completeProfileClasses["text-field-container"])}>
        <TextField variant={"outlined"}
          onChange={(e) => setName(e)}
          value={name}
          label={"Name"}
          isLargeVariant
          isExtraPadded
          labelType="normal"
          placeholder="John Doe"
        />
      </StyledBox>
      {profileType == 'agency' ?
        <>
          <StyledBox className={classNames(completeProfileClasses["text-field-container"])}>
            <TextField variant={"outlined"}
              onChange={(e) => setAgencyName(e)}
              value={agencyName}
              label={"Agency Name"}
              isLargeVariant
              isExtraPadded
              labelType="normal"
              placeholder="John Doe"
            />
          </StyledBox>
          <StyledBox className={classNames(completeProfileClasses["text-field-container"])}>
            <TextField variant={"outlined"}
              onChange={(e) => setWebsite(e)}
              value={website}
              label={"Website"}
              isLargeVariant
              isExtraPadded
              labelType="normal"
              placeholder="shethink.com"
            />
          </StyledBox>
          <StyledBox className={classNames(completeProfileClasses["text-field-container"])}>
            <TextField variant={"outlined"}
              onChange={(e) => setLinkedinURL(e)}
              value={linkedinURL}
              label={"Agency Linkedin URL"}
              isLargeVariant
              isExtraPadded
              labelType="normal"
              placeholder="shethink.com"
            />
          </StyledBox></> : <></>}
      {/* </Row>
    <Row style={{ justifyContent: 'space-between', gap: '10px', marginTop: '1rem' }}> */}
      <StyledBox className={classNames(completeProfileClasses["text-field-container"])}>
        <TextField variant={"outlined"}
          onChange={(e) => setLocation(e)}
          value={location}
          label={"Location"}
          isLargeVariant
          isExtraPadded
          labelType="normal"
          placeholder="Indore, India"
        />
      </StyledBox>
      <StyledBox className={classNames(completeProfileClasses["text-field-container"])}>
        <TextField variant={"outlined"}
          onChange={(e) => {
            validateEmail(e);
            setEmail(e)
          }}
          value={email}
          label={"Email"}
          isLargeVariant
          isExtraPadded
          labelType="normal"
          placeholder="johndoe@gmail.com"
          EndIconAdornment={email ? isEmailValid ? <StyledCheckCircle /> : <StyledCheckCross /> : <></>}
        />
      </StyledBox>
      <StyledBox className={classNames(completeProfileClasses["text-field-container"])}>
        <TextField variant={"outlined"}
          onChange={(e) => {
            validateNumber(e);
            setPhone(e)
          }}
          value={phone}
          label={"Phone"}
          isLargeVariant
          isExtraPadded
          labelType="normal"
          isNumericInput
          placeholder="1234567890"
          EndIconAdornment={phone ? isPhoneValid ? <StyledCheckCircle /> : <StyledCheckCross /> : <></>}

        />
      </StyledBox>
      <StyledBox className={classNames(completeProfileClasses["text-field-container"])}>
        <CustomSelect
          label={"Services"}
          placeholder={"Services"}
          option={servicesOptions}
          selectedlist={selectedServices}
          setselectedList={setSelectedServices}
          OptionTextStyle={{ fontSize: '14px' }}
          placeholderStyle={{ fontSize: '14px', color: '#a9a9a9' }}
          labelStyle={{ fontSize: '14px', marginBottom: '10px' }}
          isLargeVariant
          isExtraPadded
        />
      </StyledBox>
      <StyledBox className={classNames(completeProfileClasses["text-field-container"])}>
        <CustomSelect
          label={"Industry"}
          placeholder={"Industry"}
          option={industriesOption}
          selectedlist={selectedIndustries}
          setselectedList={setSelectedIndustries}
          OptionTextStyle={{ fontSize: '14px' }}
          placeholderStyle={{ fontSize: '14px', color: '#a9a9a9' }}
          labelStyle={{ fontSize: '14px', marginBottom: '10px' }}
          isLargeVariant
          isExtraPadded
        />
      </StyledBox>
      <StyledBox className={classNames(completeProfileClasses["text-field-container"])}>
        <TextField variant={"outlined"}
          onChange={(e) =>
            setIp(e)
          }
          value={ip}
          label={"IPs (Optional)"}
          isLargeVariant
          isExtraPadded
          labelType="normal"
          placeholder="Product"

        />
      </StyledBox>
      <StyledBox className={classNames(completeProfileClasses["text-field-container"])}>
        <StyledLabel className={classNames(completeProfileClasses.text)}>Upload Your Portfolio (Upto 5)</StyledLabel>
        <Row style={{ flexWrap: 'wrap', marginTop: '10px' }}>
          {Array.from(pickedFiles).map((file, index) =>
            <StyledBox className={classNames(completeProfileClasses["text-field-container"])}>
              <Button color="inherit" variant='outlined' style={{ margin: '3px' }}
                endIcon={<CancelIcon />} onClick={() => {
                  const arr = Array.from(pickedFiles);
                  arr.splice(index, 1)
                  setPickedFiles(arr)
                }}>
                <StyledLabel className={classNames(completeProfileClasses.text)}>{file.name}</StyledLabel>
              </Button>
            </StyledBox>)}
        </Row>
        <FilePicker label="Upload" fileTypes="application/pdf" onChange={e => {
          console.log(e.target.files && Array.from(e.target.files));
          setPickedFiles(e.target.files && Array.from(e.target.files) || [])
        }} />

      </StyledBox>
    </Row>
    <StyledBox className={classNames(completeProfileClasses["text-field-container"])}>
      <Button isBlackButton component="span" style={{ marginTop: '20px', paddingLeft: '30px', paddingRight: '30px' }}
        onClick={() => {
          onSubmit(
            {
              name,
              agencyName,
              website,
              linkedinURL,
              location,
              email,
              phone,
              selectedIndustries,
              portfolio: pickedFiles,
              ip
            }
          )

        }}>
        {submitButtonLabel}
      </Button>

    </StyledBox>

    {children}
  </Container >
};

export default CompleteProfile;
