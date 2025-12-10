import { ColorRole } from "../../utils/design/dynamic/theme/config/config";
import { getCssVariables } from "../../utils/design/dynamic/theme/utils";
import "./box.scss";

export type Props = {
  color: ColorRole;
};

export const Box = ({ color }: Props) => {
  return (
    <div style={getCssVariables(color)} className="box">
      <h2 className="box__title">hello world</h2>
      <p className="box__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        repellat esse, quas dicta, hic nisi maiores ullam molestias id eveniet,
        ad necessitatibus dolor iure unde enim at velit. Temporibus,
        dignissimos!
      </p>
    </div>
  );
};
