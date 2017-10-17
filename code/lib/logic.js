
/**
 * Sample transaction processor function.
 */

function onSetScanId(SetScanId) {
  SetScanId.product.ScanId = SetScanId.ScanId;
  return getAssetRegistry('org.acme.sample.Product')
    .then(function (assetRegistry) {
      return assetRegistry.update(setSensorTemp.product);
    });
}


