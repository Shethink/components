import React, { ReactNode, useState } from "react";
import {
  StyledLabel,
  StyledBox,
  completeProfileClasses,
  StyledCheckCircle,
  StyledCheckCross,
  StyledRow,
} from "./styles";
import Container from "../container";
import Row from "../row";
import TextField from "../text-field";
import classNames from "classnames";
import { CancelIcon, CheckCircleIcon } from "../icon";
import CustomSelect from "../custom-select";
import FilePicker from "../file-picker";
import Button from "../button";
import Checkbox from "../checkbox-group";
import { InputAdornment } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Divider from "../divider";
import CheckboxGroup from "../checkbox-group";

interface Item {
  id: number;
  name: string;
}
type ProfileData = {
  name: string;
  agencyName: string;
  website: string;
  linkedinURL: string;
  location: string;
  email: string;
  phone: string;
  selectedIndustries: Item[];
  portfolio: File[] | [];
  ip: string;
};
export type CompleteProfileProps = {
  children: ReactNode;
  pageTitle: string;
  profileType?: "agency" | "marketer" | "brand";
  submitButtonLabel?: string;
  onSubmit: (data: ProfileData) => void;
  onVerifyClick: (data: any) => void;
  industriesOptionsFromMain: Item[];
  servicesOptionsFromMain: Item[];
  languageOptionFromMain: Item[];
  onContactOptionChange?: (checked: string[]) => void;
  onBudgetChange?: (checked: string[]) => void;
  onDurationChange?: (checked: string[]) => void;
};

const CompleteProfile = ({
  children,
  pageTitle,
  profileType,
  submitButtonLabel,
  industriesOptionsFromMain,
  servicesOptionsFromMain,
  languageOptionFromMain,
  onSubmit,
  onVerifyClick,
  onContactOptionChange,
  onBudgetChange,
  onDurationChange,
}: CompleteProfileProps) => {
  const [name, setName] = useState("");
  const [productName, setProductName] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [fullName, setFullName] = useState("");
  const [agencyName, setAgencyName] = useState("");
  const [website, setWebsite] = useState("");
  const [otp, setOTP] = useState("");
  const [linkedinURL, setLinkedinURL] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [selectedIndustries, setSelectedIndustries] = useState<Item[]>([]);
  const [selectedServices, setSelectedServices] = useState<Item[]>([]);
  const [pickedFiles, setPickedFiles] = useState<File[] | []>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<Item[]>([]);
  const [ip, setIp] = useState("");
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
  const languageOption: Item[] = [
    {
      id: 1,
      name: "English",
    },
    {
      id: 2,
      name: "Hindi",
    },
  ];
  const contactOptions = [
    { label: "Email" },
    { label: "Phone" },
    { label: "Whatsapp" },
  ];
  const budgetOptions = [
    { label: "$0-100" },
    { label: "$1000-2500" },
    { label: "$2500-5000" },
    { label: "$5000+" },
  ];
  const durationOption = [
    { label: "Less than 1 month" },
    { label: "1 -3 months" },
    { label: "More than 3 months" },
  ];
  const validateEmail = (email: string) => {
    let isValid = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    setIsEmailValid(!!isValid);
  };
  function validateNumber(num: string) {
    let isValid = num.match(/^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/);
    setIsPhoneValid(!!isValid);
  }

  return (
    <Container>
      <Row style={{ justifyContent: "flex-start" }}>
        <StyledLabel className={classNames(completeProfileClasses.medium)}>
          {pageTitle}
        </StyledLabel>
      </Row>
      <Row
        style={{
          justifyContent: "space-between",
          gap: "25px",
          flexWrap: "wrap",
          marginTop: "1rem",
        }}
      >
        {/* agency and marketer */}
        {(profileType == "agency" || profileType == "marketer") && (
          <StyledBox
            className={classNames(
              completeProfileClasses["text-field-container"]
            )}
          >
            <TextField
              variant={"outlined"}
              onChange={(e) => setName(e)}
              value={name}
              label={"Name"}
              isLargeVariant
              isExtraPadded
              labelType="normal"
              placeholder="John Doe"
            />
          </StyledBox>
        )}

        {/* agency only */}
        {profileType == "agency" && (
          <>
            <StyledBox
              className={classNames(
                completeProfileClasses["text-field-container"]
              )}
            >
              <TextField
                variant={"outlined"}
                onChange={(e) => setAgencyName(e)}
                value={agencyName}
                label={"Agency Name"}
                isLargeVariant
                isExtraPadded
                labelType="normal"
                placeholder="John Doe"
              />
            </StyledBox>
            <StyledBox
              className={classNames(
                completeProfileClasses["text-field-container"]
              )}
            >
              <TextField
                variant={"outlined"}
                onChange={(e) => setWebsite(e)}
                value={website}
                label={"Website"}
                isLargeVariant
                isExtraPadded
                labelType="normal"
                placeholder="shethink.com"
              />
            </StyledBox>
            <StyledBox
              className={classNames(
                completeProfileClasses["text-field-container"]
              )}
            >
              <TextField
                variant={"outlined"}
                onChange={(e) => setLinkedinURL(e)}
                value={linkedinURL}
                label={"Agency Linkedin URL"}
                isLargeVariant
                isExtraPadded
                labelType="normal"
                placeholder="shethink.com"
              />
            </StyledBox>
          </>
        )}

        {/* agency and marketer */}
        {(profileType == "agency" || profileType == "marketer") && (
          <>
            <StyledBox
              className={classNames(
                completeProfileClasses["text-field-container"]
              )}
            >
              <TextField
                variant={"outlined"}
                onChange={(e) => setLocation(e)}
                value={location}
                label={"Location"}
                isLargeVariant
                isExtraPadded
                labelType="normal"
                placeholder="Indore, India"
              />
            </StyledBox>
            <StyledBox
              className={classNames(
                completeProfileClasses["text-field-container"]
              )}
            >
              <TextField
                variant={"outlined"}
                onChange={(e) => {
                  validateEmail(e);
                  setEmail(e);
                }}
                value={email}
                label={"Email"}
                isLargeVariant
                isExtraPadded
                labelType="normal"
                placeholder="johndoe@gmail.com"
                EndIconAdornment={
                  email ? (
                    isEmailValid ? (
                      <StyledCheckCircle />
                    ) : (
                      <StyledCheckCross />
                    )
                  ) : (
                    <></>
                  )
                }
              />
            </StyledBox>
            <StyledBox
              className={classNames(
                completeProfileClasses["text-field-container"]
              )}
            >
              <TextField
                variant={"outlined"}
                onChange={(e) => {
                  validateNumber(e);
                  setPhone(e);
                }}
                value={phone}
                label={"Phone"}
                isLargeVariant
                isExtraPadded
                labelType="normal"
                isNumericInput
                placeholder="1234567890"
                EndIconAdornment={
                  phone ? (
                    isPhoneValid ? (
                      <StyledCheckCircle />
                    ) : (
                      <StyledCheckCross />
                    )
                  ) : (
                    <></>
                  )
                }
              />
            </StyledBox>
          </>
        )}

        {(profileType == "agency" || profileType == "marketer") && (
          <>
            <StyledBox
              className={classNames(
                completeProfileClasses["text-field-container"]
              )}
            >
              <CustomSelect
                label={"Services"}
                placeholder={"Services"}
                option={
                  servicesOptionsFromMain?.length
                    ? servicesOptionsFromMain
                    : servicesOptions
                }
                selectedlist={selectedServices}
                setselectedList={setSelectedServices}
                OptionTextStyle={{ fontSize: "14px" }}
                placeholderStyle={{ fontSize: "14px", color: "#a9a9a9" }}
                labelStyle={{ fontSize: "14px", marginBottom: "10px" }}
                isLargeVariant
                isExtraPadded
              />
            </StyledBox>
            <StyledBox
              className={classNames(
                completeProfileClasses["text-field-container"]
              )}
            >
              <CustomSelect
                label={"Industry"}
                placeholder={"Industry"}
                option={
                  industriesOptionsFromMain?.length
                    ? industriesOptionsFromMain
                    : industriesOption
                }
                selectedlist={selectedIndustries}
                setselectedList={setSelectedIndustries}
                OptionTextStyle={{ fontSize: "14px" }}
                placeholderStyle={{ fontSize: "14px", color: "#a9a9a9" }}
                labelStyle={{ fontSize: "14px", marginBottom: "10px" }}
                isLargeVariant
                isExtraPadded
              />
            </StyledBox>
          </>
        )}
        {/* agency and marketer */}
        {(profileType == "agency" || profileType == "marketer") && (
          <>
            <StyledBox
              className={classNames(
                completeProfileClasses["text-field-container"]
              )}
            >
              <TextField
                variant={"outlined"}
                onChange={(e) => setIp(e)}
                value={ip}
                label={"IPs (Optional)"}
                isLargeVariant
                isExtraPadded
                labelType="normal"
                placeholder="Product"
              />
            </StyledBox>
            <StyledBox
              className={classNames(
                completeProfileClasses["text-field-container"]
              )}
            >
              <StyledLabel className={classNames(completeProfileClasses.text)}>
                Upload Your Portfolio (Upto 5)
              </StyledLabel>
              <Row style={{ flexWrap: "wrap", marginTop: "10px" }}>
                {Array.from(pickedFiles).map((file, index) => (
                  <StyledBox
                    className={classNames(
                      completeProfileClasses["text-field-container"]
                    )}
                  >
                    <Button
                      color="inherit"
                      variant="outlined"
                      style={{ margin: "3px" }}
                      endIcon={<CancelIcon />}
                      onClick={() => {
                        const arr = Array.from(pickedFiles);
                        arr.splice(index, 1);
                        setPickedFiles(arr);
                      }}
                    >
                      <StyledLabel
                        className={classNames(completeProfileClasses.text)}
                      >
                        {file.name}
                      </StyledLabel>
                    </Button>
                  </StyledBox>
                ))}
              </Row>
              <FilePicker
                label="Upload"
                fileTypes="application/pdf"
                onChange={(e) => {
                  console.log(e.target.files && Array.from(e.target.files));
                  setPickedFiles(
                    (e.target.files && Array.from(e.target.files)) || []
                  );
                }}
              />
            </StyledBox>
          </>
        )}

        {/* brands only */}
        {profileType == "brand" && (
          <>
            <StyledBox
              className={classNames(completeProfileClasses["text-field-full"])}
            >
              <StyledLabel
                className={classNames(completeProfileClasses.small)}
                style={{
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
              >
                Brand Details
              </StyledLabel>
            </StyledBox>
            <StyledBox
              className={classNames(
                completeProfileClasses["text-field-container"]
              )}
            >
              <TextField
                variant={"outlined"}
                onChange={(e) => setProductName(e)}
                value={productName}
                label={"Product Name"}
                isLargeVariant
                isExtraPadded
                labelType="normal"
                placeholder="John Doe"
              />
            </StyledBox>
            <StyledBox
              className={classNames(
                completeProfileClasses["text-field-container"]
              )}
            >
              <CustomSelect
                label={"Industry"}
                placeholder={"Industry Expertise"}
                option={
                  industriesOptionsFromMain?.length
                    ? industriesOptionsFromMain
                    : industriesOption
                }
                selectedlist={selectedIndustries}
                setselectedList={setSelectedIndustries}
                OptionTextStyle={{ fontSize: "14px" }}
                placeholderStyle={{ fontSize: "14px", color: "#a9a9a9" }}
                labelStyle={{ fontSize: "14px", marginBottom: "10px" }}
                isLargeVariant
                isExtraPadded
              />
            </StyledBox>
            <StyledBox
              className={classNames(completeProfileClasses["text-field-full"])}
            >
              <TextField
                variant={"outlined"}
                onChange={(e) => setProductUrl(e)}
                value={productUrl}
                label={"Product Url"}
                isLargeVariant
                isExtraPadded
                labelType="normal"
                placeholder="Enter Product URL"
              />
            </StyledBox>
            <StyledBox
              className={classNames(completeProfileClasses["text-field-full"])}
            >
              <TextField
                variant={"outlined"}
                onChange={(e) => setProductDescription(e)}
                value={productDescription}
                label={"Product Description (optional)"}
                isLargeVariant
                isExtraPadded
                labelType="normal"
                placeholder="Describe what your business does"
                isMultiline={true}
              />
            </StyledBox>
            <StyledBox
              className={classNames(completeProfileClasses["text-field-full"])}
            >
              <StyledLabel
                className={classNames(completeProfileClasses.small)}
                style={{
                  fontSize: "1rem",
                  marginTop: "15px",
                }}
              >
                Location and Language
              </StyledLabel>
            </StyledBox>
            <StyledBox
              className={classNames(
                completeProfileClasses["text-field-container"]
              )}
            >
              <TextField
                variant={"outlined"}
                onChange={(e) => setLocation(e)}
                value={location}
                label={"Agency Location"}
                isLargeVariant
                isExtraPadded
                labelType="normal"
                EndIconAdornment
                placeholder="Indore, India"
              />
            </StyledBox>
            <StyledBox
              className={classNames(
                completeProfileClasses["text-field-container"]
              )}
            >
              <CustomSelect
                label={"Language"}
                placeholder={"Language"}
                option={
                  languageOptionFromMain?.length
                    ? languageOptionFromMain
                    : languageOption
                }
                selectedlist={selectedLanguage}
                setselectedList={setSelectedLanguage}
                OptionTextStyle={{ fontSize: "14px" }}
                placeholderStyle={{ fontSize: "14px", color: "#a9a9a9" }}
                labelStyle={{ fontSize: "14px", marginBottom: "10px" }}
                isLargeVariant
                isExtraPadded
              />
            </StyledBox>
            <StyledBox
              className={classNames(completeProfileClasses["text-field-full"])}
              style={{ marginTop: "15px" }}
            >
              <Divider width="100%" height="1px" color="#D7D8E1" />
            </StyledBox>
            <StyledBox
              className={classNames(completeProfileClasses["text-field-full"])}
            >
              <StyledLabel
                className={classNames(completeProfileClasses.small)}
                style={{
                  fontSize: "1rem",
                  marginTop: "15px",
                }}
              >
                Contact Details
              </StyledLabel>
            </StyledBox>
            <StyledBox
              className={classNames(
                completeProfileClasses["text-field-container"]
              )}
            >
              <TextField
                variant={"outlined"}
                onChange={(e) => setFullName(e)}
                value={fullName}
                label={"Full Name"}
                isLargeVariant
                isExtraPadded
                labelType="normal"
                placeholder="John Doe"
                isMultiline={true}
              />
            </StyledBox>
            <StyledBox
              className={classNames(
                completeProfileClasses["text-field-container"]
              )}
            >
              <TextField
                variant={"outlined"}
                onChange={(e) => setWebsite(e)}
                value={website}
                label={"Website"}
                isLargeVariant
                isExtraPadded
                labelType="normal"
                placeholder="shethink.com"
              />
            </StyledBox>
            <StyledBox
              className={classNames(
                completeProfileClasses["text-field-container"]
              )}
            >
              <TextField
                variant={"outlined"}
                onChange={(e) => {
                  validateEmail(e);
                  setEmail(e);
                }}
                value={email}
                label={"Email"}
                isLargeVariant
                isExtraPadded
                labelType="normal"
                placeholder="johndoe@gmail.com"
                EndIconAdornment={
                  email ? (
                    isEmailValid ? (
                      <StyledCheckCircle />
                    ) : (
                      <StyledCheckCross />
                    )
                  ) : (
                    <></>
                  )
                }
              />
            </StyledBox>
            <StyledBox
              className={classNames(
                completeProfileClasses["text-field-container"]
              )}
            >
              <TextField
                variant={"outlined"}
                onChange={(e) => {
                  validateNumber(e);
                  setPhone(e);
                }}
                value={phone}
                label={"Phone"}
                isLargeVariant
                isExtraPadded
                labelType="normal"
                isNumericInput
                placeholder="1234567890"
                EndIconAdornment={
                  phone ? (
                    isPhoneValid ? (
                      <StyledCheckCircle />
                    ) : (
                      <StyledCheckCross />
                    )
                  ) : (
                    <></>
                  )
                }
              />
              <StyledLabel
                className={classNames(completeProfileClasses.small)}
                style={{
                  fontSize: "0.75rem",
                  textAlign: "right",
                  marginTop: "4px",
                  textDecoration: "underline",
                }}
                onClick={() => {
                  onVerifyClick({
                    phone,
                  });
                }}
              >
                Verify
              </StyledLabel>
            </StyledBox>
            <StyledBox
              className={classNames(
                completeProfileClasses["text-field-container"]
              )}
            >
              <TextField
                variant={"outlined"}
                onChange={(e) => setOTP(e)}
                value={otp}
                label={"Verify OTP sent on your Number"}
                isLargeVariant
                isExtraPadded
                labelType="normal"
                placeholder="123456"
              />
            </StyledBox>
            <StyledBox
              className={classNames(
                completeProfileClasses["text-field-container"]
              )}
            >
              <StyledRow>
                <StyledBox>
                  <StyledLabel variant="body1" sx={{ opacity: 0.7 }}>
                    Preferred contact method
                  </StyledLabel>
                  <StyledBox
                    sx={{
                      // paddingTop: "16px",
                      display: "flex",
                      gap: "5%",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    <CheckboxGroup
                      options={contactOptions}
                      title={""}
                      defaultChecked={[]}
                      direction="row"
                      onChange={(checked) =>
                        onContactOptionChange && onContactOptionChange(checked)
                      }
                    />
                    {/* <Checkbox label="Phone" color="black" />
                    <Checkbox label="Whatsapp" color="black" /> */}
                  </StyledBox>
                </StyledBox>
              </StyledRow>
            </StyledBox>

            <StyledBox
              className={classNames(completeProfileClasses["text-field-full"])}
            >
              <StyledLabel className={classNames(completeProfileClasses.small)}>
                Budget and timing
              </StyledLabel>
              <StyledRow>
                <StyledBox>
                  <StyledLabel variant="body1" sx={{ opacity: 0.7 }}>
                    Estimated budget for this project
                  </StyledLabel>
                  <StyledBox sx={{ paddingTop: "16px" }}>
                    <CheckboxGroup
                      options={budgetOptions}
                      title={""}
                      defaultChecked={[]}
                      onChange={(checked) =>
                        onBudgetChange && onBudgetChange(checked)
                      }
                    />
                  </StyledBox>
                </StyledBox>
                <StyledBox>
                  <StyledLabel variant="body1" sx={{ opacity: 0.7 }}>
                    Estimated time for this project
                  </StyledLabel>
                  <StyledBox sx={{ paddingTop: "16px" }}>
                    <CheckboxGroup
                      options={durationOption}
                      title={""}
                      defaultChecked={[]}
                      onChange={(checked) =>
                        onDurationChange && onDurationChange(checked)
                      }
                    />
                  </StyledBox>
                </StyledBox>
              </StyledRow>
            </StyledBox>
          </>
        )}
      </Row>

      <StyledBox
        className={classNames(completeProfileClasses["text-field-container"])}
      >
        <Button
          isBlackButton
          component="span"
          style={{
            marginTop: "20px",
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
          onClick={() => {
            onSubmit({
              name,
              agencyName,
              website,
              linkedinURL,
              location,
              email,
              phone,
              selectedIndustries,
              portfolio: pickedFiles,
              ip,
            });
          }}
        >
          {submitButtonLabel}
        </Button>
      </StyledBox>

      {children}
    </Container>
  );
};

export default CompleteProfile;
