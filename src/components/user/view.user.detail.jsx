import { Drawer, Button } from 'antd';

const ViewUserDetail = (props) => {
    const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;

    return (
        <>
            <Drawer
                title="User Detail"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={() => {
                    setDataDetail(null);
                    setIsDetailOpen(false);
                }}
                open={isDetailOpen}
            >
                {
                    dataDetail ? <>
                        <p style={{ marginBottom: '20px', fontSize: "16px" }}>Id: {dataDetail._id}</p>
                        <p style={{ marginBottom: '20px', fontSize: "16px" }}>FullName: {dataDetail.fullName}</p>
                        <p style={{ marginBottom: '20px', fontSize: "16px" }}>Email: {dataDetail.email}</p>
                        <p style={{ marginBottom: '20px', fontSize: "16px" }}>Phone number: {dataDetail.phone}</p>

                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div></div>
                            <Button type="primary" onClick={() => setIsDetailOpen(false)}>OK</Button>
                        </div>
                    </>
                        :
                        <>
                            <p style={{ color: "red" }}>Data is empty</p>
                        </>
                }
            </Drawer>
        </>
    )
}

export default ViewUserDetail;
