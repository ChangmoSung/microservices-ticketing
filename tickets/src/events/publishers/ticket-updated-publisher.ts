import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@changmotickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
