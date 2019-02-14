const DashboardField = ({
  type, name, label, value, placeholder, keys
}) => `
   <label for="">${label}</label>
   <input type="${type}" name="${name}" value="${value}" placeholder="${placeholder}">
   <small class="textMuted" key="${keys}"></small>`;
export default DashboardField;
