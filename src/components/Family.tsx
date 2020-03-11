import { FunctionComponent } from "react";
import React from "react";

interface FamilyProps {
    foo?: string;
    bar: number;
}

const FamilyComponent: FunctionComponent<FamilyProps> = (props) => {
    return (
        <span>Hello, {props.foo}, {props.bar}</span>
    );
};

FamilyComponent.defaultProps = {
    foo: "default"
};