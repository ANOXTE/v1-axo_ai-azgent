import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.stripe.com",
  description: "Manage payments and financial workflows.",
  auth: connect("mcp.stripe.com/prj_QTE9Ixr7Syw2lhK5A8sJkOuxC4jM"),
});
