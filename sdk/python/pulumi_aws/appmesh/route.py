# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Route(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The ARN of the route.
    """
    created_date: pulumi.Output[str]
    """
    The creation date of the route.
    """
    last_updated_date: pulumi.Output[str]
    """
    The last update date of the route.
    """
    mesh_name: pulumi.Output[str]
    """
    The name of the service mesh in which to create the route.
    """
    name: pulumi.Output[str]
    """
    The name to use for the route.
    """
    spec: pulumi.Output[dict]
    """
    The route specification to apply.
    """
    virtual_router_name: pulumi.Output[str]
    def __init__(__self__, resource_name, opts=None, mesh_name=None, name=None, spec=None, virtual_router_name=None, __name__=None, __opts__=None):
        """
        Provides an AWS App Mesh route resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] mesh_name: The name of the service mesh in which to create the route.
        :param pulumi.Input[str] name: The name to use for the route.
        :param pulumi.Input[dict] spec: The route specification to apply.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if mesh_name is None:
            raise TypeError('Missing required property mesh_name')
        __props__['mesh_name'] = mesh_name

        __props__['name'] = name

        if spec is None:
            raise TypeError('Missing required property spec')
        __props__['spec'] = spec

        if virtual_router_name is None:
            raise TypeError('Missing required property virtual_router_name')
        __props__['virtual_router_name'] = virtual_router_name

        __props__['arn'] = None
        __props__['created_date'] = None
        __props__['last_updated_date'] = None

        super(Route, __self__).__init__(
            'aws:appmesh/route:Route',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

