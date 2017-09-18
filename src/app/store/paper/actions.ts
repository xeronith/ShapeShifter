import { Action } from '@ngrx/store';
import { CanvasCursor, ToolMode } from 'app/model/paper';
import { Point } from 'app/scripts/common';

export const SET_TOOL_MODE = '__paper__SET_TOOL_MODE';
export const SET_SELECTION_BOX = '__paper__SET_SELECTION_BOX';
export const SET_PATH_OVERLAY_INFO = '__paper__SET_PATH_OVERLAY';
export const SET_FOCUSED_PATH_INFO = '__paper__SET_FOCUSED_PATH_INFO';
export const SET_CANVAS_CURSOR = '__paper__SET_CANVAS_CURSOR';

export class SetToolMode implements Action {
  readonly type = SET_TOOL_MODE;
  readonly payload: { toolMode: ToolMode };
  constructor(toolMode: ToolMode) {
    this.payload = { toolMode };
  }
}

export class SetSelectionBox implements Action {
  readonly type = SET_SELECTION_BOX;
  readonly payload: { selectionBox: { from: Point; to: Point } };
  constructor(selectionBox: { from: Point; to: Point } | undefined) {
    this.payload = { selectionBox };
  }
}

export class SetPathOverlayInfo implements Action {
  readonly type = SET_PATH_OVERLAY_INFO;
  readonly payload: { pathOverlayInfo: PathOverlayInfo };
  constructor(pathOverlayInfo: PathOverlayInfo) {
    this.payload = { pathOverlayInfo };
  }
}

export class SetFocusedPathInfo implements Action {
  readonly type = SET_FOCUSED_PATH_INFO;
  readonly payload: { focusedPathInfo: FocusedPathInfo };
  constructor(focusedPathInfo: FocusedPathInfo) {
    this.payload = { focusedPathInfo };
  }
}

export class SetCanvasCursor implements Action {
  readonly type = SET_CANVAS_CURSOR;
  readonly payload: { canvasCursor: CanvasCursor };
  constructor(canvasCursor: CanvasCursor) {
    this.payload = { canvasCursor };
  }
}

export type Actions =
  | SetToolMode
  | SetSelectionBox
  | SetPathOverlayInfo
  | SetFocusedPathInfo
  | SetCanvasCursor;

export interface PathOverlayInfo {
  readonly pathData: string;
  readonly strokeColor: string;
}

export interface FocusedPathInfo {
  readonly layerId: string;
  readonly selectedSegments: ReadonlySet<number>;
  readonly visibleHandleIns: ReadonlySet<number>;
  readonly visibleHandleOuts: ReadonlySet<number>;
  readonly selectedHandleIn: number;
  readonly selectedHandleOut: number;
}