namespace mailprocessor;

entity EmailConfiguration {
    key ID                   : UUID    @mandatory;
        fullName             : localized  String   @mandatory;
        emailId              : localized  String  @mandatory;
        password             : localized  String  @mandatory;
        protocol             : localized  String  @mandatory;
        authenticationMethod : localized  String  @mandatory;
        port                 : localized  Integer @mandatory;
        connectionSecurity   : localized  String  @mandatory;
        userName             : localized  String  @mandatory;
        hostName             : localized  String  @mandatory;
        pollingFrequency     : localized String  @mandatory;
        keywords             : array of String ;
        markRead             : Boolean;     
}