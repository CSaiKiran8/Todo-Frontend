import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import "./list.css";

export default function List({ text, remove, update }) {
  return (
    <div className="con">
      <div className="group">
        <div className="text" style={{ color: "#7800ff" }}>{text}</div>
        <div className="icon">
          <ModeEditOutlineTwoToneIcon color="dark" onClick={update} />
          <DeleteTwoToneIcon color="dark" onClick={remove} />
        </div>
      </div>
    </div>
  );
}