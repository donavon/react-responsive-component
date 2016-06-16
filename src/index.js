import "matchmedia-polyfill";
import "matchmedia-polyfill/matchMedia.addListener";
import ResponsiveComponentDefault from "./ui/ResponsiveComponent";

class ResponsiveComponent extends ResponsiveComponentDefault {
    constructor(props) {
        super(props);
        console.warn( //eslint-disable-line no-console
            "The following format is deprecated:\n" +
            "  import { ResponsiveComponent } from 'react-responsive-component';\n" +
            "Please use this format instead:\n" +
            "  import RenderIf from 'react-responsive-component';\n" +
            "This will stop working completely in verion 2.x"
        );
    }
}

export default ResponsiveComponentDefault; // This is the new way.
export { ResponsiveComponent }; // This is the old way.
