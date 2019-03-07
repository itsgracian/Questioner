import Field from "../../common/DashboardField.js";

//
const MeetupTemp = value => `
  <div class="editForm">
   ${Field({
    label: "Topic",
    type: "text",
    name: "topic",
    placeholder: "topic",
    value: `${value.topic ? value.topic : ""}`,
    keys: "topic-error"
  })}
   </div>
   <div class="editForm">
    ${Field({
    label: "Location",
    type: "text",
    name: "location",
    placeholder: "location",
    value: `${value.location ? value.location : ""}`,
    keys: "location-error"
  })}
    </div>
    <div class="editForm">
     ${Field({
    label: "Happening On (Year-Month-Day)",
    type: "text",
    name: "happeningon",
    placeholder: "happeningon",
    value: `${value.happening ? new Date(value.happening).toDateString() : ""}`,
    keys: "happening-error"
  })}
     </div>
  `;

export default MeetupTemp;
