import React from "react";

interface AboutProps {
    name: string;
    occupation: string;
}

export class AboutComponent extends React.Component<AboutProps, {}> {
    public static defaultProps = {
        name: "Jasper"
    };

    public render(): JSX.Element {
        return (
            <span>Hello, {this.props.name.toUpperCase()}</span>
        );
    }
}