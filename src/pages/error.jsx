import { Result, Button } from "antd";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Result
            status="404"
            title="Oops!"
            subTitle={error.statusText || error.message}
            extra={<Button type="primary"><Link to="/">Back to homepage</Link></Button>}
        />
    );
}
