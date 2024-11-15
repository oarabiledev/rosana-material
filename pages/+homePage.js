import { $LinearLayout, $Html } from "rosana";
import { Button } from "../src";

let homePage = $LinearLayout("fillxy, vcenter");
Button(homePage, "Hello World", "filled");
$Html.H1(homePage).batch({ textContent: "Hello World" });
export default homePage;
