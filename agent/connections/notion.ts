import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.notion.com/mcp",
  description: "Notion workspace: search and edit pages and databases.",
  auth: connect("mcp.notion.com/prj_QTE9Ixr7Syw2lhK5A8sJkOuxC4jM"),
});
