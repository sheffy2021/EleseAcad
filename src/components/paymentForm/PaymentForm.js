import React, { useState } from 'react'
import { Amount, Btns, Form, FormContainer, FormTitle, FormWrapper, Home, Input, InputBox, Label, Option, ProceedToPayment, Select, SelectBox } from './Styling'

const PaymentForm = () => {

    const [value, setValue] = useState('default')
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <FormContainer>
                <FormWrapper>
                    <FormTitle>Payment form</FormTitle>
                    <Form>
                        <InputBox>
                            <Input type="text" name="" required />
                            <Label>Name:</Label>
                        </InputBox>
                        <SelectBox>
                            <Select defaultValue={value} onChange={handleChange}>
                                <Option value='default' disabled hidden >Select Country</Option>
                                <Option value="nigeria">Nigeria</Option>
                            </Select>
                            <Select defaultValue={value} onChange={handleChange}>
                                <Option value='default' disabled hidden >Select State</Option>
                                <Option value="kwara">Kwara</Option>
                                <Option value="kwara">oyo</Option>
                            </Select>

                        </SelectBox>
                        <Amount>Fee: #20,000</Amount>
                        <Btns>
                            <ProceedToPayment type='submit' value='Proceed To Payment' />
                            <Home to='/'>Back To Home</Home>
                        </Btns>
                    </Form>
                </FormWrapper>
            </FormContainer>
        </>
    )
}

export default PaymentForm
