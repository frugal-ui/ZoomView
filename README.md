# ZoomView

Control a BindableObject&lt;number> for zooming.

## Usage

```TypeScript
import ZoomView from '@frugal-ui/zoomview';

const zoomLevel = new State(100);

const myInterface = MyFrame(
    MyHeader(
        ZoomView(zoomLevel),
    ),

    MyContentView().createBinding(zoomLevel, updateZoomLevel)
)

```
