//  * useState hook information to be pulled
export const inputHook = {
  firstName: "",
  lastName: "",
  serviceBranch: "",
  username: "",
  email: "",
  password: "",
};

// * Props
export const firstNameProps = {
  type: "text",
  label: "First Name",
  name: "firstName",
};

export const lastNameProps = {
  type: "text",
  label: "Last Name",
  name: "lastName",
};

export const usernameProps = {
  type: "text",
  label: "Username",
  name: "username",
};

export const emailProps = {
  type: "email",
  label: "Email",
  name: "email",
};

export const passProps = {
  type: "password",
  label: "Password",
  name: "password",
};

// * Checkbox props
export const armyCheckbox = {
  label: "Army",
  value: "army",
  sx: {
    color: "green",
    "&.Mui-checked": {
      color: "green",
    },
  },
};

export const airForceCheckbox = {
  label: "airforce",
  value: "airforce",
  sx: {
    color: "gray",
    "&.Mui-checked": {
      color: "#083088",
    },
  },
};

export const marinesCheckBox = {
  label: "marines",
  value: "marines",
  sx: {
    color: "red",
    "&.Mui-checked": {
      color: "red",
    },
  },
};

export const navyCheckbox = {
  label: "navy",
  value: "navy",
  sx: {
    color: "#003B4F",
    "&.Mui-checked": {
      color: "#003B4F",
    },
  },
};

export const coastguardCheckbox = {
  label: "coastguard",
  value: "coastguard",
  sx: {
    color: "#5ACAE5",
    "&.Mui-checked": {
      color: "#5ACAE5",
    },
  },
};

export const spaceForceCheckbox = {
  label: "spaceforce",
  value: "spaceforce",
  sx: {
    color: "black",
    "&.Mui-checked": {
      color: "black",
    },
  },
};
