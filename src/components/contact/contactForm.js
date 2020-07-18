import React, { useState, useRef } from "react"
import { Form, Input, Button, Steps, Space, Typography } from "antd"
import PhoneInput from "./phoneInput"
import "./contactForm.less"
import axios from "axios"
import qs from "query-string"

const ContactForm = props => {
  const { Step } = Steps
  const { TextArea } = Input
  const { Title } = Typography

  const [form] = Form.useForm()
  const netlifyForm = useRef(null)

  const [state, setState] = useState({
    name: "",
    company: "",
    location: "",
    phone: "",
    email: "",
    details1: "",
    details2: "",
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const lastStep = 2

  const handlePhoneInput = value => {
    setState(prev => ({
      ...prev.state,
      phone: value,
    }))
  }

  const validateFields = async e => {
    if (currentStep === 1) {
      try {
        const { name, company, location, phone } = await form.validateFields([
          "name",
          "company",
          "location",
          "phone",
        ])

        setState(prev => ({
          ...prev,
          name,
          company,
          location,
          phone,
        }))

        setCurrentStep(currentStep + 1)
      } catch (err) {
        console.log("Failed:", err)
      }
    } else if (currentStep === 2) {
      const { details1, details2 } = await form.validateFields([
        "details1",
        "details2",
      ])

      setState(prev => ({
        ...prev,
        details1,
        details2,
      }))
    }

    if (currentStep === lastStep) {
      // Submit Netlify hidden form
      netlifyForm.current.dispatchEvent(new Event("submit"))
    }
  }

  const handleNetlifySubmit = async e => {
    e.preventDefault()

    try {
      await axios.post("/contact", qs.stringify(state), {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })

      setFormSubmitted(true)
    } catch (err) {
      setFormSubmitted(false)
    } finally {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <>
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="hidden-form"
        ref={netlifyForm}
        onSubmit={e => handleNetlifySubmit(e)}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="hidden-form" />
        <input type="hidden" name="name" value={state.name} />
        <input type="hidden" name="location" value={state.location} />
        <input type="hidden" name="company" value={state.company} />
        <input type="hidden" name="phone" value={state.phone} />
        <input type="hidden" name="details-1" value={state.details1} />
        <input type="hidden" name="details-2" value={state.details2} />
      </form>
      <Form
        className="contact-form"
        form={form}
        labelAlign="left"
        labelCol={{ xs: { span: 24 } }}
        wrapperCol={{ xs: { span: 24 } }}
        name="contact-form"
      >
        <Steps size="small" current={currentStep - 1}>
          <Step title="Info" />
          <Step title="Details" />
          <Step title="Done" />
        </Steps>
        <div className="form-content" style={{ margin: "24px 0" }}>
          {currentStep === 1 ? (
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
                <PhoneInput name="phone" onChange={handlePhoneInput} />
              </Form.Item>
            </>
          ) : currentStep === 2 ? (
            <>
              <Form.Item
                colon={false}
                label="What type of business or businesses do you want Commercial Cannabis Inc to find in order to help your business succeed and why?"
                name="details1"
                rules={[{ required: true, message: "Answer required" }]}
              >
                <TextArea name="details1" rows={5} />
              </Form.Item>
              <Form.Item
                colon={false}
                label="Please summarize your business. Tell us using as many details as you can about your customer base, products, how you’re the same as your competition in your sector and how you’re different."
                name="details2"
                rules={[{ required: true, message: "Answer required" }]}
              >
                <TextArea name="details2" rows={5} />
              </Form.Item>
            </>
          ) : (
            currentStep === lastStep + 1 && (
              <div style={{ margin: "100px 0", textAlign: "center" }}>
                <Title level={2}>
                  {formSubmitted
                    ? "Message Sent"
                    : "Form could not be submitted"}
                </Title>
                <Typography>
                  {formSubmitted
                    ? "Thank you for contacting us. We'll be in touch soon."
                    : "Please try again or contact the responsible for this website"}
                </Typography>
              </div>
            )
          )}
        </div>
        {!formSubmitted && (
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
              <Button htmlType="button" type="primary" onClick={validateFields}>
                {currentStep === lastStep ? "Send" : "Next"}
              </Button>
            </Space>
          </div>
        )}
      </Form>
    </>
  )
}

export default ContactForm
