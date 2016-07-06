//
//  ESMap.h
//  TabrisMapsExample
//
//  Created by Patryk Mol on 30/06/16.
//
//

#import <Tabris/BasicWidget.h>

@class ESMarker;

@interface ESMap : BasicWidget
@property (assign) BOOL tapListener;
@property (assign) BOOL readyListener;
@property (assign) BOOL panListener;
@property (assign) BOOL showMyLocation;
@property (strong) NSString *mapType;
@property (strong) NSArray *center;
@property (strong) NSArray *region;
- (void)addMarker:(ESMarker *)marker;
- (void)removeMarker:(ESMarker *)marker;
@end
