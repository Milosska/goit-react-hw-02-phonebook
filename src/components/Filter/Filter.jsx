import { Label, Input } from './Filter.styled';

export const Filter = ({ onFilter }) => {
  return (
    <>
      <Label>
        Find contacts by name
        <Input type="text" name="filter" onChange={e => onFilter(e)} />
      </Label>
    </>
  );
};
