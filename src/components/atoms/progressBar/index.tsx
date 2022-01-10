import styled from "@emotion/styled";

interface ProgressBarProps {
  percentComplete?: number;
}
const ProgressBar: React.FC<ProgressBarProps> = ({ percentComplete }) => {
  const StyledDiv = styled("div")({
    width: "100%",
    height: "15px",
    backgroundColor: "#f1f6f4",
    padding: 0,
    margin: 0,
  });
  const percentCompleted =
    percentComplete !== undefined && percentComplete !== null
      ? percentComplete + "%"
      : "30%";
  const InnerDiv = styled("div")({
    width: percentCompleted,
    height: "15px",
    margin: 0,
    padding: 0,
    backgroundColor: "#E1ECFC",
  });
  return (
    <StyledDiv data-testid="div">
      <InnerDiv data-testid="div"></InnerDiv>
    </StyledDiv>
  );
};
export default ProgressBar;
