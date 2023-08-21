import React from "react";
import Button from "./Button";

export default {
    title: "Button",
    component: Button,
    argTypes: {
        label: {
            description: 'Label of the button'
        },
        handleClick: {
            action: "handler clicked",
            control: { type: "disbaled" }
        },
        size:{
            control: { type: 'select', options: ["sm", "md", "lg"]},
            description: "size fo buttons"
        },
        backgroundColor: {
            control: { type: 'color'},
            description: "color of button"
        }
    },
    parameters: {
        componentSubtitle: (<>
            <p>Description of component</p>
            <div><h3 style={{color: "black"}}>Usage</h3></div>
            <p>Usage description here...</p>
        </>),
        design: {
          type: 'figma',
          url: 'https://www.figma.com/file/jc1IX9g1CUGU92RkWRMJu7/Venus-2.0-(-In-Progress-)?node-id=1221%3A54180'
        }
    }

}

export const Red = (args: any)=>{
    return <Button label={args.label} handleClick={()=>{console.log("button clicked")}} size={args.size} backgroundColor={args.backgroundColor} />
}
Red.args = {
    label: "Login",
    size: "md",
    backgroundColor: "red"
}

export const Green = (args: any)=>{
    return <Button label={args.label} handleClick={()=>{console.log("button clicked")}} size={args.size} backgroundColor={args.backgroundColor} />
}
Green.args = {
    label: "Green",
    size: "lg",
    backgroundColor: "green"
}