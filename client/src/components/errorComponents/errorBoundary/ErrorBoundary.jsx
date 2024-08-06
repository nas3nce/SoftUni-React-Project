import { Component } from "react";

import PageNotFound from "../pageNotFound/PageNotFound";

export default class ErrorBoundary extends Component {


    constructor() {
        super();
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(err) {
        return { hasError: true };
    }

    componentDidCatch(err, errInfo) {
        console.log(err);
    }

    set(value) {
        this.state.hasError = value;
    }

    render() {
        if (this.state.hasError) {
            this.set(false);
            return <PageNotFound />;
        } else {
            return this.props.children;
        }

    }
}