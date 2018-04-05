import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { EmojiPickerModule } from '@ionic-tools/emoji-picker';

import { LoginComponent } from './auth/login/login';
import { RegistrationComponent } from './auth/registration/registration';
import { ForgetComponent } from './auth/forget/forget';
import { HeaderComponent } from './common/header/header';
import { MenusComponent } from './common/menus/menus';
import { FieldComponent } from './common/field/field';
import { AvatarComponent } from './popovers/avatar/avatar';
import { PreviewImageComponent } from './preview-image/preview-image';
import { BoxMessageComponent } from './box-message/box-message';
import { AttachComponent } from './attach/attach';
import { ListFilesComponent } from './list-files/list-files';

@NgModule({
	declarations: [
		LoginComponent,
		RegistrationComponent,
		ForgetComponent,
		HeaderComponent,
		MenusComponent,
		FieldComponent,
		AvatarComponent,
		PreviewImageComponent,
		BoxMessageComponent,
    AttachComponent,
    ListFilesComponent
	],
	imports: [
		IonicModule,
		EmojiPickerModule
	],
	exports: [
		LoginComponent,
		RegistrationComponent,
		ForgetComponent,
		HeaderComponent,
		MenusComponent,
		FieldComponent,
		AvatarComponent,
		PreviewImageComponent,
		BoxMessageComponent,
    AttachComponent,
    ListFilesComponent
	],
	entryComponents: [
		AvatarComponent,
		PreviewImageComponent,
		BoxMessageComponent,
		AttachComponent,
		ListFilesComponent
	],
	providers: [
	]
})
export class ComponentsModule { }
