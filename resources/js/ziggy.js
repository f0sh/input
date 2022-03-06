const Ziggy = {"url":"http:\/\/localhost:8500","port":8500,"defaults":{},"routes":{"login":{"uri":"login","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.update":{"uri":"reset-password","methods":["POST"]},"register":{"uri":"register","methods":["GET","HEAD"]},"user-profile-information.update":{"uri":"user\/profile-information","methods":["PUT"]},"user-password.update":{"uri":"user\/password","methods":["PUT"]},"password.confirm":{"uri":"user\/confirm-password","methods":["GET","HEAD"]},"password.confirmation":{"uri":"user\/confirmed-password-status","methods":["GET","HEAD"]},"two-factor.login":{"uri":"two-factor-challenge","methods":["GET","HEAD"]},"two-factor.enable":{"uri":"user\/two-factor-authentication","methods":["POST"]},"two-factor.confirm":{"uri":"user\/confirmed-two-factor-authentication","methods":["POST"]},"two-factor.disable":{"uri":"user\/two-factor-authentication","methods":["DELETE"]},"two-factor.qr-code":{"uri":"user\/two-factor-qr-code","methods":["GET","HEAD"]},"two-factor.recovery-codes":{"uri":"user\/two-factor-recovery-codes","methods":["GET","HEAD"]},"profile.show":{"uri":"user\/profile","methods":["GET","HEAD"]},"other-browser-sessions.destroy":{"uri":"user\/other-browser-sessions","methods":["DELETE"]},"current-user-photo.destroy":{"uri":"user\/profile-photo","methods":["DELETE"]},"current-user.destroy":{"uri":"user","methods":["DELETE"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"api.forms.create":{"uri":"api\/forms","methods":["POST"]},"api.forms.show":{"uri":"api\/forms\/{uuid}","methods":["GET","HEAD"]},"api.forms.update":{"uri":"api\/forms\/{uuid}","methods":["POST"]},"api.forms.delete":{"uri":"api\/forms\/{uuid}","methods":["DELETE"]},"api.forms.publish":{"uri":"api\/forms\/{uuid}\/publish","methods":["POST"]},"api.forms.unpublish":{"uri":"api\/forms\/{uuid}\/unpublish","methods":["POST"]},"api.forms.images.store":{"uri":"api\/forms\/{uuid}\/avatar","methods":["POST"]},"api.forms.images.delete":{"uri":"api\/forms\/{uuid}\/avatar","methods":["DELETE"]},"api.forms.results.show":{"uri":"api\/results\/{uuid}","methods":["GET","HEAD"]},"api.interactions.results.show":{"uri":"api\/interactions\/{interaction}\/responses","methods":["GET","HEAD"],"bindings":{"interaction":"id"}},"api.blocks.index":{"uri":"api\/forms\/{form}\/blocks","methods":["GET","HEAD"],"bindings":{"form":"id"}},"api.blocks.create":{"uri":"api\/forms\/{form}\/blocks","methods":["POST"],"bindings":{"form":"id"}},"api.blocks.update":{"uri":"api\/forms\/blocks\/{block}","methods":["POST"],"bindings":{"block":"id"}},"api.blocks.delete":{"uri":"api\/forms\/blocks\/{block}","methods":["DELETE"],"bindings":{"block":"id"}},"api.interactions.create":{"uri":"api\/{block}\/interactions","methods":["POST"],"bindings":{"block":"id"}},"api.interactions.update":{"uri":"api\/interactions\/{interaction}","methods":["POST"],"bindings":{"interaction":"id"}},"api.interactions.delete":{"uri":"api\/interactions\/{interaction}","methods":["DELETE"],"bindings":{"interaction":"id"}},"api.form-blocks.mapping":{"uri":"api\/form-blocks\/mapping","methods":["GET","HEAD"]},"api.blocks.sequence":{"uri":"api\/forms\/{form}\/blocks\/sequence","methods":["POST"],"bindings":{"form":"id"}},"api.interactions.sequence":{"uri":"api\/{block}\/interactions\/sequence","methods":["POST"],"bindings":{"block":"id"}},"dashboard":{"uri":"\/","methods":["GET","HEAD"]},"forms.edit":{"uri":"forms\/{uuid}\/edit","methods":["GET","HEAD"]},"forms.settings":{"uri":"forms\/{uuid}\/settings","methods":["GET","HEAD"]},"forms.results":{"uri":"forms\/{uuid}\/results","methods":["GET","HEAD"]},"images.show":{"uri":"images\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"}},"internal.meta-preview":{"uri":"internal\/meta-preview\/{id}","methods":["GET","HEAD"]},"forms.show":{"uri":"{uuid}","methods":["GET","HEAD"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
