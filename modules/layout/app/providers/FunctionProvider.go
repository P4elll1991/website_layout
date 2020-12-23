package providers

import (
	"fmt"
	"website_layout/modules/layout/app/mappers/mfunction"
	"website_layout/modules/layout/app/mappers/mparams"
	"website_layout/modules/layout/app/types/layout_types"
)


type FunctionProvider struct{
	mapperFunc *mfunction.MFunc
	mapperParam *mparams.MParam
}

func NewFunctionProvider() *FunctionProvider {
	return &FunctionProvider{
		mapperFunc: mfunction.NewMFunc(),
		mapperParam: mparams.NewMParam(),
	}
}

func (p FunctionProvider) GetFuncsByProjectId(id string) (funcs []layout_types.Func, err error) {
	
	funcs, err = p.mapperFunc.GetFuncByProjectId(id)
	if err != nil {
		err = fmt.Errorf("FunctionProvider.GetFuncsByProjectId: %s", err)
		return
	}

	for i:=range funcs {
		funcs[i].Params, err = p.mapperParam.GetParamsByFuncId(funcs[i].Id)
		if err != nil {
			err = fmt.Errorf("FunctionProvider.GetFuncsByProjectId: %s", err)
			return
		}

		funcs[i].Used, err = p.GetFuncsByParentId(funcs[i].Id)
		if err != nil {
			err = fmt.Errorf("FunctionProvider.GetFuncsByProjectId: %s", err)
			return
		}
	}

	return
}

func (p FunctionProvider) GetFuncsByParentId(id string) (funcs []layout_types.Func, err error) {
	
	funcs, err = p.mapperFunc.GetFuncByProjectId(id)
	if err != nil {
		err = fmt.Errorf("FunctionProvider.GetFuncsByProjectId: %s", err)
		return
	}

	for i:=range funcs {
		funcs[i].Params, err = p.mapperParam.GetParamsByFuncId(funcs[i].Id)
		if err != nil {
			err = fmt.Errorf("FunctionProvider.GetFuncsByProjectId: %s", err)
			return
		}

		funcs[i].Used, err = p.GetFuncsByParentId(funcs[i].Id)
		if err != nil {
			err = fmt.Errorf("FunctionProvider.GetFuncsByProjectId: %s", err)
			return
		}
	}

	return
}

func (p FunctionProvider) GetFuncsByEventId(id string) (fun layout_types.Func, err error) {
	
	fun, err = p.mapperFunc.GetFuncByEventId(id)
	if err != nil {
		err = fmt.Errorf("FunctionProvider.GetFuncsByProjectId: %s", err)
		return
	}

	
		fun.Params, err = p.mapperParam.GetParamsByFuncId(fun.Id)
		if err != nil {
			err = fmt.Errorf("FunctionProvider.GetFuncsByProjectId: %s", err)
			return
		}

		fun.Used, err = p.GetFuncsByParentId(fun.Id)
		if err != nil {
			err = fmt.Errorf("FunctionProvider.GetFuncsByProjectId: %s", err)
			return
		
		}

	return
}