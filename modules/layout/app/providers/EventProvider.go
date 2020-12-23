package providers

import (
	"fmt"
	"website_layout/modules/layout/app/mappers/mevents"
	"website_layout/modules/layout/app/mappers/mparams"
	"website_layout/modules/layout/app/types/layout_types"
)


type EventProvider struct{
	mapperEvent *mevents.MEvent
	mapperParam *mparams.MParam
	functionProvider *FunctionProvider
}

func NewEventProvider() *EventProvider {
	return &EventProvider{
		mapperEvent:mevents.NewMEvent(),
		mapperParam:mparams.NewMParam(),
		functionProvider: NewFunctionProvider(),
	}
}

func (p EventProvider) GetEventByTagId(id string) (events []layout_types.EventTag, err error) {
	events, err = p.mapperEvent.GetEventByTagId(id)
	if err != nil {
		err = fmt.Errorf("EventProvider.GetEventByTagId: %s", err)
		return
	}

	for i := range events {
		events[i].Params, err = p.mapperParam.GetParamsByEventId(events[i].Id)
		if err != nil {
			err = fmt.Errorf("EventProvider.GetEventByTagId: %s", err)
			return
		}

		events[i].Function, err = p.functionProvider.GetFuncsByEventId(events[i].Id)
		if err != nil {
			err = fmt.Errorf("EventProvider.GetEventByTagId: %s", err)
			return
		}
	}


	return
}