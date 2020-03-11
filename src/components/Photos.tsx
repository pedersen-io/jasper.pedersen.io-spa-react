import React from "react";
import { Image } from 'react-bootstrap';

interface PhotosProps {
}

export class PhotosComponent extends React.Component<PhotosProps, {}> {
    public static defaultProps = {
    };

    public render(): JSX.Element {
        return (
            <Image src="../assets/IMG_20200224_230417_024.jpg" fluid roundedCircle />
        );
    }
}