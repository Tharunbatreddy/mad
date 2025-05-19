const Log = ({ turns }) => {
  return turns.map((turn) => (
    <li id="log" key={`${turn.square.row}${turn.square.col}`}>
      {turn.Player} Selected {turn.square.row}, {turn.square.col}
    </li>
  ));
};
export default Log;
