export const mapping = {
  CanvasPosition: { x: -67, y: 230, z: 0, gap: 1 },
  BlockGroup: {
    'block-623187': { x: 132, y: 118 },
    'block-624018': { x: 426, y: -50 },
    'block-73377': { x: 428, y: 306 },
  },
  TagGroup: {
    'tag-626505': {
      x: 169,
      y: 144,
      style: { width: 100, height: 32 },
      editable: false,
      input: 'test',
    },
    'tag-629962': {
      x: 462,
      y: -23,
      style: { width: 100, height: 32 },
      editable: false,
      input: 'test2',
    },
    'tag-80986': {
      x: 463,
      y: 333,
      style: { width: 100, height: 32 },
      editable: false,
      input: 'test3',
    },
  },
  LineGroup: {
    'line-77619': {
      fromKey: 'block-73377',
      toKey: 'block-623187',
      to: {
        x: 65,
        y: 348,
        width: 100,
        height: 80,
        top: 348,
        right: 165,
        bottom: 428,
        left: 65,
      },
      from: {
        x: 361,
        y: 536,
        width: 100,
        height: 80,
        top: 536,
        right: 461,
        bottom: 616,
        left: 361,
      },
    },
    'line-592694': {
      fromKey: 'block-623187',
      toKey: 'block-624018',
      from: {
        x: 65,
        y: 348,
        width: 100,
        height: 80,
        top: 348,
        right: 165,
        bottom: 428,
        left: 65,
      },
      to: {
        x: 360,
        y: 180,
        width: 100,
        height: 80,
        top: 180,
        right: 460,
        bottom: 260,
        left: 360,
      },
    },
  },
};
