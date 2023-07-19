"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("@frugal-ui/base");
function ZoomView(zoomLevel) {
    const isPopoverOpen = new base_1.State(false);
    return (0, base_1.ButtonGroup)((0, base_1.Button)({
        iconName: 'zoom_out',
        accessibilityLabel: 'zoom out',
        action: () => (zoomLevel.value -= 10),
    }), (0, base_1.Popover)({
        isOpen: isPopoverOpen,
        accessibilityLabel: 'zoom options',
        toggle: (0, base_1.Button)({
            iconName: 'more_horiz',
            accessibilityLabel: 'show zoom options',
            action: () => (isPopoverOpen.value = true),
        }),
        content: (0, base_1.VStack)((0, base_1.Text)('Zoom', 'h5'), (0, base_1.Slider)(zoomLevel, {
            max: 200,
        }).setAccessibilityLabel('zoom level slider'), (0, base_1.Input)(new base_1.NumberInputCfg(zoomLevel, 'Zoom')).setAccessibilityLabel('zoom level'))
            .useDefaultPadding()
            .useDefaultSpacing()
            .cssHeight('auto')
            .cssWidth('16rem'),
    }), (0, base_1.Button)({
        iconName: 'zoom_in',
        accessibilityLabel: 'zoom in',
        action: () => (zoomLevel.value += 10),
    }));
}
exports.default = ZoomView;
