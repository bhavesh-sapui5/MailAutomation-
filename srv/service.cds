using { mailprocessor} from '../db/schema';

Service MailExtractor {
    entity EmailConfiguration as projection on mailprocessor.EmailConfiguration;
}