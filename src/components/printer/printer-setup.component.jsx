import * as React from "react";
import { AffidavitDoc } from "../documents/affidavit-doc.component";


export class PrinterSetup extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { checked: false };
  }

  // canvasEl;

//   componentDidMount() {
//     const ctx = this.canvasEl.getContext("2d");
//     if (ctx) {
//       ctx.beginPath();
//       ctx.arc(95, 50, 40, 0, 2 * Math.PI);
//       ctx.stroke();
//       ctx.fillStyle = "rgb(200, 0, 0)";
//       ctx.fillRect(85, 40, 20, 20);
//       ctx.save();
//     }
//   }

  handleCheckboxOnChange = () =>
    this.setState({ checked: !this.state.checked });

//   setRef = (ref) => (this.canvasEl = ref);

  render() {
    const { text } = this.props;

    return (
      <div className="relativeCSS">
        <style type="text/css" media="print">
          {"\
            @page { size: portrait; }\
          "}
        </style>
        <div className="flash" />

        <AffidavitDoc />

      </div>
    );
  }
}

export const FunctionalComponentToPrint = React.forwardRef((props, ref) => {
  // eslint-disable-line max-len
  return <PrinterSetup ref={ref} text={props.text} />;
});