import React, { useState } from "react"
import { Form, Input, Button, Steps, Space, Typography } from "antd"
import PhoneInput from "./phoneInput"
import "./contactForm.less"

const ContactForm = () => {
  const { Step } = Steps
  const { TextArea } = Input
  const { Title } = Typography

  const [form] = Form.useForm()
  const [state, setState] = useState({
    name: "",
    business: "",
    city: "",
    phone: "",
    email: "",
    questions: [
      {
        question:
          "What type of business or businesses do you want Commercial Cannabis Inc to find in order to help your business succeed and why?",
        answer: "",
      },
      {
        question:
          "Please summarize your business. Tell us using as many details as you can about your customer base, products, how you’re the same as your competition in your sector and how you’re different.",
        answer: "",
      },
    ],
  })

  const [currentStep, setCurrentStep] = useState(0)
  const [messageSent, setMessageSent] = useState(false)

  const lastStep = 1

  const handlePhoneInput = value => {
    setState(prev => ({
      ...prev.state,
      phone: value,
    }))
  }

  const validateFields = async () => {
    if (currentStep === 0) {
      try {
        await form.validateFields(["name", "company", "location", "phone"])

        setCurrentStep(currentStep + 1)
      } catch (err) {
        console.log("Failed:", err)
      }
    }
  }

  const handleConfirmation = e => {
    setCurrentStep(currentStep + 1)
    setMessageSent(true)
  }

  return (
    <Form
      className="contact-form"
      form={form}
      labelAlign="left"
      labelCol={{ xs: { span: 24 } }}
      wrapperCol={{ xs: { span: 24 } }}
      onFinish={handleConfirmation}
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <Steps size="small" current={currentStep}>
        <Step title="Info" />
        <Step title="Details" />
        <Step title="Done" />
      </Steps>
      <div className="form-content" style={{ margin: "24px 0" }}>
        {currentStep === 0 ? (
          <>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input name="name" />
            </Form.Item>
            <Form.Item
              label="Location"
              name="location"
              rules={[{ required: true, message: "Location is required" }]}
            >
              <Input name="location" />
            </Form.Item>
            <Form.Item label="Company" name="companyName">
              <Input name="company" />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                { min: 14, message: "Please enter a valid phone number" },
              ]}
              validateTrigger={["onBlur", "onChange"]}
            >
              <PhoneInput
                name="phone"
                onChange={handlePhoneInput}
                value={state.phone}
              />
            </Form.Item>
          </>
        ) : currentStep === 1 ? (
          <>
            <Form.Item
              colon={false}
              label={state.questions[0].question}
              name="question1"
              rules={[{ required: true, message: "Answer required" }]}
            >
              <TextArea name="moreInfo-1" rows={5} />
            </Form.Item>
            <Form.Item
              colon={false}
              label={state.questions[1].question}
              name="question2"
              rules={[{ required: true, message: "Answer required" }]}
            >
              <TextArea name="moreInfo-2" rows={5} />
            </Form.Item>
          </>
        ) : (
          currentStep === lastStep + 1 && (
            <div style={{ margin: "50px 0", textAlign: "center" }}>
              <Title level={2}>Message Sent</Title>
              <Typography>
                Thank you for contacting us. We'll be in touch soon.
              </Typography>
            </div>
          )
        )}
      </div>
      {!messageSent && (
        <div style={{ textAlign: "right", marginBottom: 16 }}>
          <Space>
            {currentStep > 0 && (
              <Button
                type="ghost"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Back
              </Button>
            )}
            {currentStep === lastStep ? (
              <Button htmlType="submit" type="primary">
                Send
              </Button>
            ) : (
              <Button htmlType="button" type="primary" onClick={validateFields}>
                Next
              </Button>
            )}
          </Space>
        </div>
      )}
    </Form>
  )
}

export default ContactForm
