import styled from "styled-components";

export const AttributeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AttributeLabelName = styled.label`
  font-size: 18x;
  padding: 0 0 6px 12px;
  color: ${({ theme }) => theme.colors.components.leftSideMenu.fontColor};
  margin-top: 18px;
`;

export const UserInfoAttribute = styled.input`
  padding-left: 12px;
  height: 55px;
  border: 1px solid ${({ theme }) => theme.colors.fonts.inactiveRoute};
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.components.queueContainer.background};
`;

const ProfileInfoProperty = ({ label, defaultValue, onChange, disabled }) => {
  return (
    <AttributeWrapper>
      <AttributeLabelName htmlFor={label}>{label}:</AttributeLabelName>
      <UserInfoAttribute
        type="text"
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
      />
    </AttributeWrapper>
  );
};

export default ProfileInfoProperty;
