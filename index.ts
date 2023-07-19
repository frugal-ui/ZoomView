import {
    BindableObject,
    Button,
    ButtonGroup,
    Input,
    NumberInputCfg,
    Popover,
    Slider,
    State,
    Text,
    VStack,
} from '@frugal-ui/base';

export default function ZoomView(zoomLevel: BindableObject<number>) {
    const isPopoverOpen = new State(false);

    return ButtonGroup(
        Button({
            iconName: 'zoom_out',
            accessibilityLabel: 'zoom out',
            action: () => (zoomLevel.value -= 10),
        }),
        Popover({
            isOpen: isPopoverOpen,
            accessibilityLabel: 'zoom options',
            toggle: Button({
                iconName: 'more_horiz',
                accessibilityLabel: 'show zoom options',
                action: () => (isPopoverOpen.value = true),
            }),
            content: VStack(
                Text('Zoom', 'h5'),
                Slider(zoomLevel, {
                    max: 200,
                }).setAccessibilityLabel('zoom level slider'),
                Input(
                    new NumberInputCfg(zoomLevel, 'Zoom'),
                ).setAccessibilityLabel('zoom level'),
            )
                .useDefaultPadding()
                .useDefaultSpacing()
                .cssHeight('auto')
                .cssWidth('16rem'),
        }),
        Button({
            iconName: 'zoom_in',
            accessibilityLabel: 'zoom in',
            action: () => (zoomLevel.value += 10),
        }),
    );
}
