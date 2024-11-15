import { $LinearLayout, $Html } from 'rosana';

let homePage = $LinearLayout('fillxy, vcenter');

$Html.H1(homePage).batch({textContent: "Hello World"})
export default homePage;