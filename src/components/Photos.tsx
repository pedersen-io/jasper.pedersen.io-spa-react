import React from "react";
import { Image } from 'react-bootstrap';

interface PhotosProps {
}

export class PhotosComponent extends React.Component<PhotosProps, {}> {
    public static defaultProps = {
    };

    public render(): JSX.Element {
        return (
            <Image src="../assets/Snapchat-704939441.jpg" fluid roundedCircle />
        );
    }
}