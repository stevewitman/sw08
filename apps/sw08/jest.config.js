module.exports = {
  name: 'sw08',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sw08',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
