#import "RCTFirebaseAzureLogin.h"

@implementation FirebaseAzureLogin

RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(firebaseAzureLogin,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    resolve(@"Hello World!");
}

@end
