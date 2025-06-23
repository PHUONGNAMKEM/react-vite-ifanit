import { Drawer, Button } from "antd";

const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;

  return (
    <>
      <Drawer
        width={"40vw"}
        title="User Detail"
        closable={{ "aria-label": "Close Button" }}
        onClose={() => {
          setDataDetail(null);
          setIsDetailOpen(false);
        }}
        open={isDetailOpen}
      >
        {dataDetail ? (
          <>
            <p style={{ marginBottom: "20px", fontSize: "16px" }}>
              Id: {dataDetail._id}
            </p>
            <p style={{ marginBottom: "20px", fontSize: "16px" }}>
              FullName: {dataDetail.fullName}
            </p>
            <p style={{ marginBottom: "20px", fontSize: "16px" }}>
              Email: {dataDetail.email}
            </p>
            <p style={{ marginBottom: "20px", fontSize: "16px" }}>
              Phone number: {dataDetail.phone}
            </p>

            <p style={{ marginBottom: "20px", fontSize: "16px" }}>Avatar:</p>
            <div style={{ margin: "0 auto", textAlign: "center" }}>
              <img
                style={{
                  maxWidth: "100%",
                  width: "200px",
                  height: "200px",
                  borderRadius: "100px",
                }}
                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar
                  }`}
              />
            </div>



            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div></div>
              <div>
                <Button style={{ margin: "0 10px" }} type="primary" onClick={() => setIsDetailOpen(false)}>
                  OK
                </Button>
                <div style={{ display: "inline-block" }}>
                  <label htmlFor="btnUpload" style={{
                    display: "block",
                    width: "fit-content",
                    marginTop: "15px",
                    padding: "6px 14px",
                    background: "#1677ff",
                    fontSize: "14px",
                    borderRadius: "5px",
                    color: "#fff",
                    cursor: "pointer"
                  }}>Upload Avatar</label>
                  <input type="file" id="btnUpload" hidden />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <p style={{ color: "red" }}>Data is empty</p>
          </>
        )}
      </Drawer>
    </>
  );
};

export default ViewUserDetail;
