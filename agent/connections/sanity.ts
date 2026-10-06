import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.sanity.io",
  description: "Query and edit content in your datasets.",
  auth: connect("mcp.sanity.io/prj_QTE9Ixr7Syw2lhK5A8sJkOuxC4jM"),
});
