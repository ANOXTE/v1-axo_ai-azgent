import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.resend.com",
  description: "Send transactional emails from your apps.",
  auth: connect("mcp.resend.com/prj_QTE9Ixr7Syw2lhK5A8sJkOuxC4jM"),
});
