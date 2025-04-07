"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importStar(require("../../Button"));
const Menu_1 = __importStar(require("../../Menu"));
const MenuItem_1 = __importDefault(require("../../Menu/MenuItem"));
const UnitSelector = ({ units = [], selectedUnit, onUnitChange, disabled = false, active = false, className, sx, buttonProps, }) => {
    if (units.length === 0) {
        return null;
    }
    const [open, setOpen] = react_1.default.useState(false);
    const anchorRef = react_1.default.useRef(null);
    const [menuStyle, setMenuStyle] = react_1.default.useState({});
    const handleToggle = () => {
        if (!disabled) {
            setOpen((prevOpen) => { return !prevOpen; });
        }
    };
    const handleClose = (_event) => {
        setOpen(false);
    };
    const handleUnitSelect = (unit) => {
        if (unit !== selectedUnit) {
            onUnitChange(unit);
        }
        setOpen(false);
    };
    const validatedUnit = react_1.default.useMemo(() => {
        const isValidUnit = units.includes(selectedUnit);
        // Return first unit in the array as fallback if selectedUnit is not in the units array
        if (!isValidUnit) {
            return units[0];
        }
        return selectedUnit;
    }, [units, selectedUnit]);
    const getDisplayValue = (unit) => {
        if (unit === 'Freeform') {
            return 'ff';
        }
        return unit;
    };
    const buttonActive = active || open;
    react_1.default.useEffect(() => {
        if (open && anchorRef.current) {
            // Find the closest TextField container
            const textFieldEl = anchorRef.current.closest('.MuiOutlinedInput-root');
            if (textFieldEl) {
                // Get the right edge position of the TextField
                const textFieldRect = textFieldEl.getBoundingClientRect();
                const buttonRect = anchorRef.current.getBoundingClientRect();
                // Calculate the offset
                const offsetX = textFieldRect.right - buttonRect.right;
                setMenuStyle({
                    marginLeft: `${offsetX}px`,
                });
            }
        }
    }, [open]);
    return (react_1.default.createElement("div", { className: className, style: { display: 'inline-flex' } },
        react_1.default.createElement(Button_1.default, Object.assign({ size: "neutral", variant: Button_1.ButtonVariants.CONTAINED, color: buttonActive ? 'secondary' : 'primary', disabled: disabled, ref: anchorRef, onClick: handleToggle, sx: Object.assign(Object.assign({}, sx), { cursor: disabled ? 'default' : 'pointer', margin: 0, textAlign: 'center', '&.MuiButtonBase-root': {
                    padding: '1px 4px !important',
                }, '.MuiInputBase-root:hover &:not(.Mui-disabled)': {
                    backgroundColor: (theme) => { return theme.palette.action.selectedOpacityModified; },
                    color: (theme) => { return theme.palette.action.selected; },
                } }) }, buttonProps, { "aria-controls": open ? 'unit-selector-menu' : undefined, "aria-expanded": open ? 'true' : undefined, "aria-haspopup": "true" }), getDisplayValue(validatedUnit)),
        react_1.default.createElement(Menu_1.default, { id: "unit-selector-menu", anchorEl: anchorRef.current, open: open, onClose: handleClose, size: Menu_1.MenuSizes.SMALL, MenuListProps: {
                dense: true,
                autoFocusItem: open,
            }, anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
            }, transformOrigin: {
                vertical: 'top',
                horizontal: 'right',
            }, sx: Object.assign(Object.assign({}, menuStyle), { '& .MuiMenu-paper': {
                    minWidth: '72px',
                    maxHeight: '136px',
                    marginTop: '6px',
                    padding: '0px',
                    boxShadow: (theme) => { return theme.shadows[2]; },
                }, '& .MuiMenuItem-root': {
                    minHeight: '28px',
                    padding: '2px 10px',
                    justifyContent: 'end',
                } }) }, units.map((unit) => {
            return (react_1.default.createElement(MenuItem_1.default, { key: unit, size: Menu_1.MenuSizes.SMALL, onClick: () => { return handleUnitSelect(unit); }, selected: unit === validatedUnit }, unit));
        }))));
};
exports.default = UnitSelector;
